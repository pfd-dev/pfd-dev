import { ToDoListScreen } from './to-do-list';

export function ProjectsScreen() {
  return (
    <>
      <header>
        <h2 className="text-stone-100 text-5xl text-center uppercase font-bold">proyectos</h2>
      </header>

      <ToDoListScreen />
    </>
  );
}
