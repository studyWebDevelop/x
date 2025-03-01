"use client";

import { tabStore } from "@/store/tabStore";
import PostRecommends from "./PostRecommends";
import FollowingPosts from "./FollowingPosts";
import { observer } from "mobx-react";

const TabDecider = () => {
  return <>{tabStore.tab == "rec" ? <PostRecommends /> : <FollowingPosts />}</>;
};

export default observer(TabDecider);
