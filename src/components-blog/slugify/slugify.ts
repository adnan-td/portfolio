export default function slugify(input: string): string {
  const stringWithHyphens = input.replace(/\s+/g, "-");
  const alphanumericString = stringWithHyphens.replace(/[^a-zA-Z0-9-]/g, "");
  return alphanumericString.toLocaleLowerCase();
}
