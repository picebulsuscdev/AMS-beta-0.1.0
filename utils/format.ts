export const formatTimeTo12Hour = (dateString?: string) => {
  if (!dateString) return "No Record"; // Return "No Record" for null/undefined input
  try {
    const date = new Date(dateString);
    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return "Invalid"; // Return "Invalid" for invalid date strings
    }
    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedHours = hours.toString().padStart(2, '0');
    return `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid"; // Return "Invalid" for any other errors during formatting
  }
};