export interface skillsInterface {
  category: string;
  skills: Skill[];
}
export interface Skill {
  name: string;
  image?: string;
  icon?: string;
  key: string;
}

export interface FlatSkill {
  category: string;
  name: string;
  icon?: string;
  image?: string;
  key: string;
};

export function groupSkills(data: FlatSkill[]): skillsInterface[] {
  const map = new Map<string, Skill[]>();

  for (const skill of data) {
    const category = skill.category
      ? skill.category.charAt(0).toUpperCase() + skill.category.slice(1)
      : skill.category;

    if (!map.has(category)) {
      map.set(category, []);
    }

    map.get(category)!.push({
      name: skill.name,
      icon: skill.icon,
      image: skill.image,
      key: skill.key,
    });
  }

  return Array.from(map.entries()).map(([category, skills]) => ({
    category,
    skills,
  }));
}