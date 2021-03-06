import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import createStore from "redux-mock-store";
import TodoList from "../../TodoList";
import { Creators as TodosActions } from "../../store/ducks/todos";

const mockStore = createStore();

const INITIAL_STATE = {
  todos: { data: ["Make coffee", "Study React"] },
};

const store = mockStore(INITIAL_STATE);

it("should render the list", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  expect(wrapper.find("li").length).toBe(2);
});

it("should be able to add new todo", () => {
  const wrapper = mount(
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
  wrapper.find("TodoList").setState({ newTodo: "New Todo" });
  wrapper.find("button").simulate("click");

  // expect(store.getState().todos.data).toEqual([
  //   "Make coffee",
  //   "Study React",
  //   "New Todo",
  // ]);
  expect(store.getActions()).toContainEqual(TodosActions.addTodo("New Todo"));
});

// it("should render the list and button", () => {
//   const wrapper = mount(<TodoList />);
//   expect(wrapper.find("ul").exists()).toBe(true);
//   expect(wrapper.find("input[name='todo']").exists()).toBe(true);
//   expect(wrapper.find("button").exists()).toBe(true);
// });

// it("shoud be able to add new todo", () => {
//   const wrapper = mount(<TodoList />);
//   wrapper
//     .find("input[name='todo']")
//     .simulate("change", { target: { value: "New todo" } });
//   wrapper.find("button").simulate("click");
//   expect(wrapper.find("ul").contains(<li>New todo</li>)).toBe(true);
// });

// it("should add new todos to local storage", () => {
//   const setItemMock = jest.fn();
//   global.localStorage.__proto__.getItem = jest.fn().mockReturnValue("[]");
//   global.localStorage.__proto__.setItem = setItemMock;

//   const wrapper = mount(<TodoList />);
//   wrapper.setState({ newTodo: "New todo" });
//   wrapper.instance().handleAddTodo(); // Use component function
//   expect(setItemMock).toHaveBeenLastCalledWith(
//     "todos",
//     JSON.stringify(["New todo"])
//   );
// });

// it("should load todos in componentDidMount", () => {
//   const getItemMock = jest
//     .fn()
//     .mockReturnValue(JSON.stringify(["Make coffee"]));
//   global.localStorage.__proto__.getItem = getItemMock;

//   const wrapper = mount(<TodoList />);
//   wrapper.setState({ newTodo: "New todo" });
//   expect(wrapper.state("todos")).toEqual(["Make coffee"]);
// });
