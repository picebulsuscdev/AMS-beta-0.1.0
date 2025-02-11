export type Correction = {
  error: { userId: string; name: string; section: string };
  new: { userId: string; name: string; section: string };
};

// Define the corrections array INSIDE this module's scope
const corrections: Correction[] = [
  {
    error: { "userId": "053", "name": "Ainash Cant V. Bautista", "section": "CE-1B" },
    new: { "userId": "053", "name": "Ainash Van V. Bautista", "section": "CE-1B" },
  },
  {
    error: { "userId": "068", "name": "Katelyn iyssel A. Dipad", "section": "CE-1B" },
    new: { "userId": "068", "name": "Katelyn Iyssel A. Dipad", "section": "CE-1B" },
  },
  {
    error: { "userId": "257", "name": "Terence Caleb D. Mattinez", "section": "CE-2C" },
    new: { "userId": "257", "name": "Terence Caleb D. Martinez", "section": "CE-2C" },
  },
  {
    error: { "userId": "417", "name": "Kaye V. Robles", "section": "CE-3C" },
    new: { "userId": "417", "name": "Kaye Cyrine V. Robles", "section": "CE-3C" },
  },
  {
    error: { "userId": "616", "name": "Christian Jay M. Guintu", "section": "CE-4B" },
    new: { "userId": "616", "name": "Christian Jay M. Guintu", "section": "CE-4C" },
  },
  // Add more corrections here...
];

export const correctData = (
  decodedData: { userId: string; name: string; section: string },
): { userId: string; name: string; section: string } => {
  let correctedData = { ...decodedData };

  // Now, the function directly uses the 'corrections' array defined above
  corrections.forEach((correction) => {
    if (
      correction.error.userId === decodedData.userId &&
      correction.error.name === decodedData.name &&
      correction.error.section === decodedData.section
    ) {
      correctedData = correction.new;
    }
  });

  return correctedData;
};