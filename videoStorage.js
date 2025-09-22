function numberOfVideos(videoSize, videoUnit, driveSize, driveUnit) {
  let videoByte = 0;
  let driveByte = 0;

  if (driveUnit !== "GB" && driveUnit !== "TB") {
    console.log("Invalid drive unit");
    return;
  }
  if (videoUnit === "B") {
    console.log("Invalid video unit");
    return;
  }

  if (videoUnit === "KB") videoByte = videoSize * 1000;
  if (videoUnit === "MB") videoByte = videoSize * 1000 * 1000;
  if (videoUnit === "GB") videoByte = videoSize * 1000 * 1000 * 1000;

  if (driveUnit === "GB") driveByte = driveSize * 1000 * 1000 * 1000;
  if (driveUnit === "TB") driveByte = driveSize * 1000 * 1000 * 1000 * 1000;

  console.log("output", Math.floor(driveByte / videoByte));

  return Math.floor(driveByte / videoByte);
}

numberOfVideos(500, "MB", 100, "GB");
numberOfVideos(2000, "B", 1, "TB");
numberOfVideos(2000, "MB", 100000, "MB");
numberOfVideos(500000, "KB", 2, "TB");
numberOfVideos(1.5, "GB", 2.2, "TB");

// 21 SEPT 2025

// Given a video size, a unit for the video size, a hard drive capacity, and a unit for the hard drive, return the number of videos the hard drive can store using the following constraints:

// The unit for the video size can be bytes ("B"), kilobytes ("KB"), megabytes ("MB"), or gigabytes ("GB").
// If not given one of the video units above, return "Invalid video unit".
// The unit of the hard drive capacity can be gigabytes ("GB") or terabytes ("TB").
// If not given one of the hard drive units above, return "Invalid drive unit".
// Return the number of whole videos the drive can fit.
// Use the following conversions:
// Unit	Equivalent
// 1 B	1 B
// 1 KB	1000 B
// 1 MB	1000 KB
// 1 GB	1000 MB
// 1 TB	1000 GB
// For example, given 500, "MB", 100, and "GB as arguments, determine how many 500 MB videos can fit on a 100 GB hard drive.
