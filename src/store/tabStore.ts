import { observable } from "mobx";

const tabStore = observable({
  tab: "rec",
  setTab(value: "rec" | "fol") {
    this.tab = value;
  },
});

export { tabStore };
