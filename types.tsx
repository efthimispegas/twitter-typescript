export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewTweet: undefined;
};

// Navigation Types
export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

// Screens Types
export type HomeParamList = {
  HomeScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type NotificationsParamList = {
  NotificationsScreen: undefined;
};

export type MessagesParamList = {
  MessagesScreen: undefined;
};

export type NewTweetParamList = {
  NewTweetScreen: undefined;
};

// Tweet Types
export type TweetType = {
  id: string,
  user: UserType,
  createdAt: string,
  content: string,
  numberOfComments: number,
  numberOfRetweets: number,
  numberOfLikes: number,
  likes: [Object],
  image?: string,
}

// User Types
export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
};

// Meta Types
export type MetaType = {
  comments: number,
  retweets: number,
  likes: number,
}
