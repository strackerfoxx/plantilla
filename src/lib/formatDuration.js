export function formatDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const durationParts = [
    hours > 0 ? `${hours} h` : null,
    remainingMinutes > 0 ? `${remainingMinutes} min` : null,
  ];

  return durationParts.filter(Boolean).join(" ") || "0 min";
}

export function getServicesDurationLabel(services) {
  const totalDuration = services.reduce((acc, curr) => acc + curr.durationMin, 0);

  return formatDuration(totalDuration);
}
