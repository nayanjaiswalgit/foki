// src/utils/dateUtils.js
export function formatDateRange(startdate, enddate) {
  if (!startdate || !enddate) {
    return "";
  }

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return {
      year,
      month,
      day: parseInt(day),
      monthName: months[parseInt(month) - 1],
    };
  };

  const start = formatDate(startdate);
  const end = formatDate(enddate);

  // If the year and month are the same for both start and end dates
  if (start.year === end.year && start.month === end.month) {
    // If the range is within the same month
    if (start.day === 1 && end.day === 31) {
      return `${start.monthName}, ${start.year}`;
    } else {
      return `${start.day}-${end.day} ${start.monthName}, ${start.year}`;
    }
  } else {
    // If the dates span multiple months or years
    return `${start.day} ${start.monthName} - ${end.day} ${end.monthName}, ${end.year}`;
  }
}
