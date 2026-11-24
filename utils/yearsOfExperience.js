const careerStart = new Date('2009-04-12T09:00');

// Full years since career start; increments on the anniversary.
export const getYearsOfExperience = () => {
  const now = new Date();
  let years = now.getFullYear() - careerStart.getFullYear();
  const hadAnniversary =
    now.getMonth() > careerStart.getMonth() ||
    (now.getMonth() === careerStart.getMonth() &&
      now.getDate() >= careerStart.getDate());
  if (!hadAnniversary) years -= 1;
  return years;
};
