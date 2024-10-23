import moment from "moment";

/**
 * Formats a given date into a specified format.
 *
 * @param {string | Date} date - The date to format. It can be a string or a Date object.
 * @param {string} format - The format string (default is 'MM-DD-YYYY').
 * @returns {string} The formatted date string.
 */

export const formatDate = (
  date: string | Date,
  format: string = "MM-DD-YYYY"
): string => {
  return moment(date).format(format);
};
