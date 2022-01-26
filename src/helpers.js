export function getTime(value) {
  const valueInMinutes = Math.floor(value / (1000 * 60));
  let secondsReminder = (value - valueInMinutes * 1000 * 60) / 1000;
  if (String(secondsReminder).length < 2)
    secondsReminder = `0${secondsReminder}`;

  return [valueInMinutes, secondsReminder];
}