"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  QrCode,
  Trash2,
  Plus,
  Upload,
  HelpCircle,
  Check,
  ArrowLeft,
  Download,
} from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import QRCode from "qrcode";
import CryptoJS from "crypto-js";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { Progress } from "@/components/ui/progress";
import { useCheckAdminAuthentication } from "@/utils/auth";

interface Student {
  userId: string;
  name: string;
  section: string;
}

export default function GenerateQRPage() {
  const authStatus = useCheckAdminAuthentication();
  const router = useRouter();

  useEffect(() => {
    if (authStatus === "unauthenticated") {
      toast.error("Session expired. Please login again.");
      router.push("/admin");
    }
  }, [authStatus, router]);

  const [students, setStudents] = useState<Student[]>([]);
  const [newName, setNewName] = useState("");
  const [newSection, setNewSection] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [cardContentMaxHeight, setCardContentMaxHeight] = useState("500px");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCompleteButton, setShowCompleteButton] = useState(false);
  const [buttonState, setButtonState] = useState<
    "generating" | "complete" | "idle"
  >("idle");

  const generateUserId = () => {
    const nextNumber = (students.length + 1).toString().padStart(3, "0");
    return nextNumber;
  };

  const handleAddStudent = () => {
    if (!newName || !newSection) {
      toast.error("Please fill in both name and section");
      return;
    }

    const newStudent: Student = {
      userId: generateUserId(),
      name: newName,
      section: newSection,
    };

    setStudents([...students, newStudent]);
    setNewName("");
    setNewSection("");
  };

  const handleDeleteStudent = (userId: string) => {
    setStudents(students.filter((student) => student.userId !== userId));
    // Regenerate userIds for remaining students
    const updatedStudents = students
      .filter((student) => student.userId !== userId)
      .map((student, index) => ({
        ...student,
        userId: (index + 1).toString().padStart(3, "0"),
      }));
    setStudents(updatedStudents);
  };

  const handleUpdateStudent = (
    userId: string,
    field: keyof Student,
    value: string,
  ) => {
    setStudents(
      students.map((student) =>
        student.userId === userId ? { ...student, [field]: value } : student,
      ),
    );
  };

  const handleImportCSV = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const rows = text.split("\n");
        if (rows.length <= 1) {
          toast.error("CSV file is empty or contains only the header");
          return;
        }
        const header = rows[0].split(",").map((cell) => cell.trim());
        if (header.length < 3 || header[2] !== "validator.piceamsqr") {
          toast.error(
            "Invalid CSV format. The third header should be 'validator.piceamsqr'",
          );
          return;
        }
        const newStudents: Student[] = [];

        rows.forEach((row, index) => {
          if (index === 0) return; // Skip header row
          const [name, section] = row.split(",").map((cell) => cell.trim());
          if (name && section) {
            newStudents.push({
              userId: (newStudents.length + 1).toString().padStart(3, "0"),
              name,
              section,
            });
          }
        });

        setStudents(newStudents);
        toast.success("CSV imported successfully");
      } catch (error) {
        console.error("CSV import error:", error);
        toast.error("Error importing CSV. Please check the file format.");
      }
    };
    reader.readAsText(file);
  };

  const handleClearAll = () => {
    setStudents([]);
  };

  // Calculate summary
  const summary = students.reduce(
    (acc, student) => {
      acc[student.section] = (acc[student.section] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  useEffect(() => {
    const calculateMaxHeight = () => {
      const headerHeight = 150;
      const buttonHeight = 60;
      const windowHeight = window.innerHeight;
      const calculatedHeight = windowHeight - headerHeight - buttonHeight;

      setCardContentMaxHeight(`${calculatedHeight}px`);
    };
    calculateMaxHeight();

    window.addEventListener("resize", calculateMaxHeight);
    return () => window.removeEventListener("resize", calculateMaxHeight);
  }, []);

  const encryptData = (data: any): string => {
    const key = "pice-bulsu-ams";
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), key).toString();
    } catch (error) {
      console.error("Error encrypting data:", error);
      return "";
    }
  };

  const generateQRCodes = async () => {
    setIsGenerating(true);
    setButtonState("generating");
    setProgress(0);
    if (students.length === 0) {
      toast.error("Please add at least one student");
      setIsGenerating(false);
      setButtonState("idle");
      return;
    }
    const zip = new JSZip();
    try {
      const sections = new Map<string, any>();

      for (const student of students) {
        if (!sections.has(student.section)) {
          sections.set(student.section, []);
        }
        sections.get(student.section).push(student);
      }

      let totalStudents = 0;
      for (const [section, studentsInSection] of sections) {
        totalStudents += studentsInSection.length;
      }
      let processedStudents = 0;

      // Generate CSV data
      let csvData = "User ID,Name,Section,validator.consolidate\n";
      for (const student of students) {
        csvData += `${student.userId},${student.name},${student.section},\n`;
      }

      zip.file("ForConsolidation.csv", csvData);

      for (const [section, studentsInSection] of sections) {
        const sectionFolder = zip.folder(section);
        for (const student of studentsInSection) {
          const encryptedData = encryptData(student);
          const qrCode = await QRCode.toDataURL(encryptedData, {
            errorCorrectionLevel: "H",
          });

          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          const img = new Image();
          img.src = qrCode;
          await new Promise((resolve) => {
            img.onload = resolve;
          });

          const imgWidth = 200;
          const imgHeight = 200;
          canvas.width = imgWidth;
          canvas.height = imgHeight + 50;

          ctx?.drawImage(img, 0, 0, imgWidth, imgHeight);
          ctx!.font = "14px sans-serif";
          ctx!.fillStyle = "black";
          ctx!.textAlign = "center";
          const text = `${student.userId} | ${student.name}`;
          const words = text.split(" ");
          let line = "";
          let y = imgHeight + 20;
          const lineHeight = 16;

          for (let n = 0; n < words.length; n++) {
            const testLine = line + words[n] + " ";
            const metrics = ctx!.measureText(testLine);
            const testWidth = metrics.width;
            if (testWidth > imgWidth) {
              ctx!.fillText(line, imgWidth / 2, y);
              line = words[n] + " ";
              y += lineHeight;
            } else {
              line = testLine;
            }
          }
          ctx!.fillText(line, imgWidth / 2, y);

          const base64Image = canvas.toDataURL("image/png").split(",")[1];
          sectionFolder!.file(
            `${student.userId}-${student.name}.png`,
            base64Image,
            { base64: true },
          );
          processedStudents++;
          const currentProgress = (processedStudents / totalStudents) * 100;
          setProgress(currentProgress);
        }
      }

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "qr_codes.zip");
      setShowCompleteButton(true);
      setButtonState("complete");
      toast.success("QR Codes Generated Successfully");
    } catch (e) {
      toast.error("There was an error generating the QR codes");
    } finally {
      setIsGenerating(false);
      setProgress(0);
      setTimeout(() => {
        setShowCompleteButton(false);
        setButtonState("idle");
      }, 3000);
    }
  };

  const handleDownloadTemplate = () => {
    const csvContent = "Name,Section,validator.piceamsqr\n";
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "student_data_template.csv");
    toast.success(
      "Reminder: Strictly do not put anything under the third column.",
    );
  };

  return (
    <div className="container mx-auto p-4 space-y-4 h-full overflow-hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Generate QR Codes</h1>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/admin/dashboard")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-muted/50 text-muted-foreground"
            onClick={() => router.push("/onboarding/administrator")}
          >
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid gap-6 h-full overflow-hidden">
        <div className="grid gap-4 md:grid-cols-2 h-full overflow-hidden">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Data</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" className="bg-muted/50 text-muted-foreground" onClick={handleDownloadTemplate}>
                    <Download className="h-4 w-4 mr-2" />
                    Template
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-muted/50 text-muted-foreground"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Import CSV
                  </Button>
                  <input
                    type="file"
                    accept=".csv"
                    className="hidden"
                    ref={fileInputRef}
                    onChange={handleImportCSV}
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent
              className="overflow-auto flex-1 flex flex-col"
              style={{ maxHeight: cardContentMaxHeight }}
            >
              <div className="flex gap-2">
                <Input
                  placeholder="Name"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                />
                <Input
                  placeholder="Section"
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                />
                <Button className="bg-blue-500/10 text-blue-500" onClick={handleAddStudent}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <div className="relative w-full overflow-auto flex-1">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        User ID
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Name
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Section
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map((student) => (
                      <tr key={student.userId} className="border-b">
                        <td className="p-4">{student.userId}</td>
                        <td className="p-4">
                          <Input
                            value={student.name}
                            onChange={(e) =>
                              handleUpdateStudent(
                                student.userId,
                                "name",
                                e.target.value,
                              )
                            }
                          />
                        </td>
                        <td className="p-4">
                          <Input
                            value={student.section}
                            onChange={(e) =>
                              handleUpdateStudent(
                                student.userId,
                                "section",
                                e.target.value,
                              )
                            }
                          />
                        </td>
                        <td className="p-4">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500"
                            onClick={() => handleDeleteStudent(student.userId)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <div className="mt-auto p-4 border-t">
              <Button
                variant="outline"
                onClick={handleClearAll}
                disabled={students.length === 0}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white transition-all duration-300"
              >
                Clear All
              </Button>
            </div>
          </Card>

          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent
              className="overflow-auto flex-1"
              style={{ maxHeight: cardContentMaxHeight }}
            >
              <div className="relative w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Section
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium">
                        Count
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(summary).map(([section, count]) => (
                      <tr key={section} className="border-b">
                        <td className="p-4">{section}</td>
                        <td className="p-4">{count}</td>
                      </tr>
                    ))}
                    <tr className="font-medium">
                      <td className="p-4">Total Students</td>
                      <td className="p-4">{students.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
            <div className="mt-auto p-4 border-t">
              {buttonState === "idle" ? (
                <div className="w-full">
                  <Button
                    className="w-full bg-blue-500 text-white"
                    disabled={students.length === 0}
                    onClick={generateQRCodes}
                  >
                    <QrCode className="h-4 w-4 mr-2" /> Generate QR Codes
                  </Button>
                </div>
              ) : buttonState === "generating" ? (
                <div className="flex flex-col gap-2 w-full">
                  <Progress value={progress} className="h-2 transition-all" />
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Generating QR Codes...</span>
                    <span className="tabular-nums">
                      {Math.round(progress)}%
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex justify-center w-full">
                  <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-500 active:bg-emerald-500 transition-colors duration-200">
                    <div className="flex items-center justify-center gap-2 text-sm font-medium text-white">
                      <Check className="h-4 w-4 mr-2" />
                      <span>Generation Complete!</span>
                    </div>
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
