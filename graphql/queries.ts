/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      name
      image
      tweets {
        items {
          id
          userID
          content
          image
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        name
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTweet = /* GraphQL */ `
  query GetTweet($id: ID!) {
    getTweet(id: $id) {
      id
      userID
      content
      image
      user {
        id
        username
        email
        name
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          userID
          tweetID
          content
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          userID
          tweetID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listTweets = /* GraphQL */ `
  query ListTweets(
    $filter: ModelTweetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTweets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        content
        image
        user {
          id
          username
          email
          name
          image
          createdAt
          updatedAt
        }
        comments {
          items {
            id
            userID
            tweetID
            createdAt
            updatedAt
          }
          nextToken
        }
        likes {
          items {
            id
            userID
            tweetID
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      userID
      tweetID
      content
      tweet {
        id
        userID
        content
        image
        user {
          id
          username
          email
          name
          image
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      user {
        id
        username
        email
        name
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        tweetID
        content
        tweet {
          id
          userID
          content
          image
          createdAt
          updatedAt
        }
        user {
          id
          username
          email
          name
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      userID
      tweetID
      user {
        id
        username
        email
        name
        image
        tweets {
          nextToken
        }
        createdAt
        updatedAt
      }
      tweet {
        id
        userID
        content
        image
        user {
          id
          username
          email
          name
          image
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        tweetID
        user {
          id
          username
          email
          name
          image
          createdAt
          updatedAt
        }
        tweet {
          id
          userID
          content
          image
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
