"use server";

import { revalidatePath } from "next/cache";
import { initDB, addItem } from "@/utils/indexedDB";

interface AttendanceRecord {
  id: string;
  eventId: string;
  memberId: string;
  type: "in" | "out";
  timestamp: Date;
}

interface EventData {
  name: string;
  date: string;
  description: string;
}

export const runtime = "edge"; // Add this line

export async function recordAttendance(data: {
  eventId: string;
  memberId: string;
  type: "in" | "out";
}) {
  await initDB(); // Initialize the database
  const record: AttendanceRecord = {
    id: Math.random().toString(36).substring(7),
    ...data,
    timestamp: new Date(),
  };

  await addItem("attendance", record);
  revalidatePath("/events/[id]");
  return { success: true, record };
}

export async function createEvent(data: EventData) {
  await initDB(); // Initialize the database
  const eventWithId = { ...data, id: Date.now().toString() };
  await addItem("trackerInfo", eventWithId);
  revalidatePath("/events");
  return { success: true };
}

export async function updateEventStatus(
  eventId: string,
  status: "active" | "completed",
) {
  await initDB();
  // In a real app you'd retrieve from the DB, update, and then store it back
  // For this example, let's create a record and add it to the DB
  const tempEvent = {
    id: eventId,
    status: status,
  };
  await addItem("trackerInfo", tempEvent); // will overwrite existing based on id
  revalidatePath("/events");
  return { success: true };
}
