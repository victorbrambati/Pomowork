export function useTime(milliseconds: number) {
  const minutesMs = 60000;
  const hoursMs = minutesMs * 60;

  const hoursTransform = milliseconds / hoursMs;

  const hours = Math.trunc(hoursTransform);

  const hoursForMinutes = hoursTransform - hours;

  const minutesTransform = hoursForMinutes * 60;

  const minutes = Math.trunc(minutesTransform);

  const minutesForSeconds = minutesTransform - minutes;

  const secondsTransform = minutesForSeconds * 60;

  const seconds = Math.round(secondsTransform);

  return [hours, minutes, seconds] as const;
}
