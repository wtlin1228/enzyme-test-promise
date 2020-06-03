import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { act } from "react-dom/test-utils";

Enzyme.configure({ adapter: new Adapter() });

test("should render hello world", async () => {
  console.log("test: start");

  const wrapper = mount(<App />);

  console.log(wrapper.debug());

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    wrapper.update();
  });

  console.log(wrapper.debug());

  console.log("test: end");
});
