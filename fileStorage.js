function numberOfFiles(fileSize, fileUnit, driveSizeGb) {

  let byte;
  let gbByte = driveSizeGb * 1000 * 1000 * 1000;

  if(fileUnit === "B"){
    byte = fileSize
  }

  if(fileUnit == "KB"){
    byte = fileSize * 1000
  }

  if(fileUnit === "MB"){
    byte = fileSize * 1000 * 1000
  }

  console.log(Math.floor(gbByte/byte))

  return Math.floor(gbByte/byte);
}

numberOfFiles(500, "KB", 1)
numberOfFiles(50000, "B", 1)
numberOfFiles(5, "MB", 1)
numberOfFiles(4096, "B", 1.5)
numberOfFiles(220.5, "KB", 100)
numberOfFiles(4.5, "MB", 750)


// 20 SEPT 2025:- 

// Given a file size, a unit for the file size, and hard drive capacity in gigabytes (GB), return the number of files the hard drive can store using the following constraints:

// The unit for the file size can be bytes ("B"), kilobytes ("KB"), or megabytes ("MB").
// Return the number of whole files the drive can fit.
// Use the following conversions:


// Unit	Equivalent
// 1 B	    1 B
// 1 KB	1000 B
// 1 MB	1000 KB
// 1 GB	1000 MB
// For example, given 500, "KB", and 1 as arguments, determine how many 500 KB files can fit on a 1 GB hard drive.