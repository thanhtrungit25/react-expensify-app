import React from "react";
import { shallow } from "enzyme";
import { ExpensesList } from "../../components/ExpensesList";
import expenses from "../fixtures/expenses";

test("should render ExpenesesList with expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("Should render ExpensesList with no expenses", () => {
  const wrapper = shallow(<ExpensesList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
