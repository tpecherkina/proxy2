export default function destructure(character) {
  const visible = [];
  const { special } = character;
  special.forEach((element) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    visible.push({
      id, name, icon, description,
    });
  });
  return visible;
}