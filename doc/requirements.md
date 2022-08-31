# Alerki project requirements

The base goal of the service is to give the ability for clients easy to make an appointment with the master.

## System specification

There are two base type of users:

- new user (unauthorized)
- client (can only make an appointment)
- master (can make an appointment and receive an appointment)

## Features

Add calendar events on appointments for master and client.

## Registration

Users can sign-in & sign-up with auth providers, or using our own auth system.

### Using auth provider

Required auth providers:

- Google
- Apple

User data:

| Item name | required |
| :--- | :--- |
| `email` | true |
| `first name` | true |
| `last name` | true |
| `picture` | false |
| `phone number` | false |

### Using our own auth system

User data:

| Item name | required |
| :--- | :--- |
| `email` | true |
| `username` | true |
| `password` | true |
| `picture` | true |
| `first name` | true |
| `last name` | true |

## Target audience

All kinds of master who give some services for clients.

## User experience & user interface

Pages specification for different types of users

### New user

If user not signed in, he see home page with sign-up / sign-in button, he can press them and register of log-in.

Or user can select service and find master then we ask hem to sign-in.

Navigation:

- home page
- sign-up & sign-in button

### Master

At home page he can see his appointments with clients, and calendar.

Navigation:

- home page
- notification
- make an appointment page
- profile

### Client

At home page he can see his appointment with master, and buttons to make an appointment.

Navigation:

- home page
- notification
- profile

## Tech stack

Language: [`TypeScript`](https://www.typescriptlang.org)

Package manager: [`Yarn`](https://yarnpkg.com)

Frontend: [`React.js`](https://reactjs.org) & [`Next.js`](https://nextjs.org)

Backend: [`Nest.js`](https://nextjs.org)

ORM: [`Prisma`](https://www.prisma.io)

Database: [`PostgreSQL`](https://www.postgresql.org)

Containerization: [`Docker`](https://www.docker.com)

Deployment environment: `VPS`
