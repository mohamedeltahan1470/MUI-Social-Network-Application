# Social Network Application

![Logo](./public/img/Screen%20Shot%202024-10-26%20at%2000.28.19.png) <!-- Add your logo path here -->
![Logo](./public/img/Screen%20Shot%202024-10-26%20at%2000.29.07.png)
![Logo](./public/img/Screen%20Shot%202024-10-26%20at%2000.29.43.png)
![Logo](./public/img/Screen%20Shot%202024-10-26%20at%2000.29.49.png)
![Logo](./public/img/Screen%20Shot%202024-10-26%20at%2000.30.06.png)
## Overview

The Social Network Application is an interactive web application built with **React** and **Material-UI** to provide a smooth and engaging user interface. The project aims to enable users to interact and share content with friends, facilitating effective communication.

## Purpose

The goal of this application is to:

- Provide a social platform for users to share their content.
- Enhance interaction among friends through various social features.
- Offer an easy-to-use and responsive user interface.

## Features

- **Post Display**: Attractive display of user posts.
- **Content Interaction**: Options to favorite, share content, and comment.
- **Friends List**: Show currently online friends.
- **Direct Messaging**: Ability to communicate with friends via messages.

## Components

### 1. Posts

A component that displays a card for each user with options to share and like.

#### Usage

```javascript
import { Posts } from './Posts';

function App() {
  return (
    <div>
      <Posts />
    </div>
  );
}
