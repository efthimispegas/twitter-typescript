/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTweet = /* GraphQL */ `
  mutation CreateTweet(
    $input: CreateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    createTweet(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateTweet = /* GraphQL */ `
  mutation UpdateTweet(
    $input: UpdateTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    updateTweet(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteTweet = /* GraphQL */ `
  mutation DeleteTweet(
    $input: DeleteTweetInput!
    $condition: ModelTweetConditionInput
  ) {
    deleteTweet(input: $input, condition: $condition) {
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
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
