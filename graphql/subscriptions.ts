/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTweet = /* GraphQL */ `
  subscription OnCreateTweet {
    onCreateTweet {
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
export const onUpdateTweet = /* GraphQL */ `
  subscription OnUpdateTweet {
    onUpdateTweet {
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
export const onDeleteTweet = /* GraphQL */ `
  subscription OnDeleteTweet {
    onDeleteTweet {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
