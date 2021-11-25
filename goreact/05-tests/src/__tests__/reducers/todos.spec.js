import todosReducer, {
  Creators as TodosActions,
} from "../../store/ducks/todos";

describe("Todos Reducer", () => {
  it("should be able to add todos", () => {
    const state = todosReducer({ data: [] }, TodosActions.addTodo("New todo"));
    expect(state.data[0]).toBe("New todo");
  });

  it("should be able to complete todos", () => {
    const todos = ["Make coffee"];
    const state = todosReducer(
      { data: todos },
      TodosActions.completeTodo("Make coffee")
    );
    expect(state.data.length).toBe(0);
  });
});
