/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email: string,
  name: string,
  image?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string,
  username?: string,
  email?: string,
  name?: string,
  image?: string | null,
  tweets?: ModelTweetConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelTweetConnection = {
  __typename: "ModelTweetConnection",
  items?:  Array<Tweet | null > | null,
  nextToken?: string | null,
};

export type Tweet = {
  __typename: "Tweet",
  id?: string,
  userID?: string,
  content?: string,
  image?: string | null,
  user?: User,
  comments?: ModelCommentConnection,
  likes?: ModelLikeConnection,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id?: string,
  userID?: string,
  tweetID?: string,
  content?: string,
  tweet?: Tweet,
  user?: User,
  createdAt?: string,
  updatedAt?: string,
};

export type ModelLikeConnection = {
  __typename: "ModelLikeConnection",
  items?:  Array<Like | null > | null,
  nextToken?: string | null,
};

export type Like = {
  __typename: "Like",
  id?: string,
  userID?: string,
  tweetID?: string,
  user?: User,
  tweet?: Tweet,
  createdAt?: string,
  updatedAt?: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  name?: string | null,
  image?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateTweetInput = {
  id?: string | null,
  userID: string,
  content: string,
  image?: string | null,
};

export type ModelTweetConditionInput = {
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetConditionInput | null > | null,
  or?: Array< ModelTweetConditionInput | null > | null,
  not?: ModelTweetConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTweetInput = {
  id: string,
  userID?: string | null,
  content?: string | null,
  image?: string | null,
};

export type DeleteTweetInput = {
  id?: string | null,
};

export type CreateCommentInput = {
  id?: string | null,
  userID: string,
  tweetID: string,
  content: string,
};

export type ModelCommentConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type UpdateCommentInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
  content?: string | null,
};

export type DeleteCommentInput = {
  id?: string | null,
};

export type CreateLikeInput = {
  id?: string | null,
  userID: string,
  tweetID: string,
};

export type ModelLikeConditionInput = {
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  and?: Array< ModelLikeConditionInput | null > | null,
  or?: Array< ModelLikeConditionInput | null > | null,
  not?: ModelLikeConditionInput | null,
};

export type UpdateLikeInput = {
  id: string,
  userID?: string | null,
  tweetID?: string | null,
};

export type DeleteLikeInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelTweetFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTweetFilterInput | null > | null,
  or?: Array< ModelTweetFilterInput | null > | null,
  not?: ModelTweetFilterInput | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelLikeFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  tweetID?: ModelIDInput | null,
  and?: Array< ModelLikeFilterInput | null > | null,
  or?: Array< ModelLikeFilterInput | null > | null,
  not?: ModelLikeFilterInput | null,
};

export type CreateUserMutationVariables = {
  input?: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input?: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input?: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateTweetMutationVariables = {
  input?: CreateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type CreateTweetMutation = {
  createTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTweetMutationVariables = {
  input?: UpdateTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type UpdateTweetMutation = {
  updateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTweetMutationVariables = {
  input?: DeleteTweetInput,
  condition?: ModelTweetConditionInput | null,
};

export type DeleteTweetMutation = {
  deleteTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input?: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input?: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input?: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikeMutationVariables = {
  input?: CreateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type CreateLikeMutation = {
  createLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikeMutationVariables = {
  input?: UpdateLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type UpdateLikeMutation = {
  updateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikeMutationVariables = {
  input?: DeleteLikeInput,
  condition?: ModelLikeConditionInput | null,
};

export type DeleteLikeMutation = {
  deleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id?: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTweetQueryVariables = {
  id?: string,
};

export type GetTweetQuery = {
  getTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTweetsQueryVariables = {
  filter?: ModelTweetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTweetsQuery = {
  listTweets?:  {
    __typename: "ModelTweetConnection",
    items?:  Array< {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id?: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      userID: string,
      tweetID: string,
      content: string,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLikeQueryVariables = {
  id?: string,
};

export type GetLikeQuery = {
  getLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikesQueryVariables = {
  filter?: ModelLikeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikesQuery = {
  listLikes?:  {
    __typename: "ModelLikeConnection",
    items?:  Array< {
      __typename: "Like",
      id: string,
      userID: string,
      tweetID: string,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      tweet?:  {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email: string,
    name: string,
    image?: string | null,
    tweets?:  {
      __typename: "ModelTweetConnection",
      items?:  Array< {
        __typename: "Tweet",
        id: string,
        userID: string,
        content: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTweetSubscription = {
  onCreateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTweetSubscription = {
  onUpdateTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTweetSubscription = {
  onDeleteTweet?:  {
    __typename: "Tweet",
    id: string,
    userID: string,
    content: string,
    image?: string | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        userID: string,
        tweetID: string,
        content: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    likes?:  {
      __typename: "ModelLikeConnection",
      items?:  Array< {
        __typename: "Like",
        id: string,
        userID: string,
        tweetID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    userID: string,
    tweetID: string,
    content: string,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikeSubscription = {
  onCreateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikeSubscription = {
  onUpdateLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikeSubscription = {
  onDeleteLike?:  {
    __typename: "Like",
    id: string,
    userID: string,
    tweetID: string,
    user?:  {
      __typename: "User",
      id: string,
      username: string,
      email: string,
      name: string,
      image?: string | null,
      tweets?:  {
        __typename: "ModelTweetConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    tweet?:  {
      __typename: "Tweet",
      id: string,
      userID: string,
      content: string,
      image?: string | null,
      user?:  {
        __typename: "User",
        id: string,
        username: string,
        email: string,
        name: string,
        image?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      likes?:  {
        __typename: "ModelLikeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
