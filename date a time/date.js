//date

// GMT{GREEN WITCH TIME }
// It was the first global standard for time.

//UTC{coordinate universal time}
//UTC is the modern standard for time measurement.
//Similar to GMT, but more accurate (uses atomic clocks).
//It's the reference time zone used by computers and systems
// enlan ke time ko utc kaha jat hah



//ISO Standard (International Organization for Standardization)
//ISO 8601 is the international standard for date and time formats.
//It helps avoid confusion caused by different formats (like dd/mm/yyyy vs mm/dd/yyyy).
//The ISO format is:
//Yyyy-MM-DDTHH:mm:ss.sss
//YYYY-MM-DDTHH:mm:ss.sssZ
//Example: 2025-05-19T14:30:00Z
//T separates date and time
//Z means UTC time


//Unix Time And Unix Epoch
//Unix Epoch is the zero point for time in most computer systems, especially those based on Unix (including Linux, macOS, and modern operating systems).
//So, The Unix Epoch is the starting point:
//January 1, 1970, 00:00:00 UTC
//Unix Time (or Epoch Time) = Number of seconds (or milliseconds) since that moment.
//Date.now(); // gives milliseconds since epoch
//Used in almost every programming language (including JavaScript).

/**How computers keep track of time?
Computers don't store dates in human-readable format.
They count time as numbers - specifically:
Number of milliseconds or seconds since a fixed point in time.
This makes it easier to do calculations (like adding days or comparing dates).
Time Zones
The Earth is divided into 24 time zones, based on the rotation of the planet.
Each time zone represents a region where the local time is the same.
Example:
India (IST) = UTC + 5/30
ondon (GMT/UTC) = UTC+0
New York (EST) = UTC -5 */

/*Term
Meaning
Time Zone
Local time difference from UTC
GMT
Historical time standard
UTC
Global, accurate time reference
ISO Format
Standard format for date-time
Unix Time
Time counted from Jan 1, 1970
Epoch
Starting reference time for systems*/