export default function slugify(input: string): string {
  try {
    const stringWithHyphens = input.replace(/\s+/g, "-");
    const alphanumericString = stringWithHyphens.replace(/[^a-zA-Z0-9-]/g, "");
    return alphanumericString.toLocaleLowerCase();
  } catch (e) {
    return "cannot-slugify";
  }
}
