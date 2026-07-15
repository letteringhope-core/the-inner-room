# The Inner Room

A minimal PWA for daily scripture, prayer, and reflection. Built with React + Firebase.

## What's already built

- Home screen: scripture header, streak, calendar (tap a day to open its notes)
- Prayer wall: post requests, "praying" reactions, report button, crisis-support link
- Notes: daily reflection tied to a calendar date
- Login: Firebase email/password auth
- Responsive layout: stacks on phone, side-by-side panels on tablet/desktop
- PWA-ready: installable on a phone home screen

## What still needs wiring up (marked with `// TODO` in the code)

- Firestore reads/writes for prayer posts, reactions, reports, and notes (currently using placeholder data that resets on refresh)
- Basic content filter on prayer post submission
- A private moderator view for reported posts
- Real devotional content source (currently one hardcoded verse)

## Getting started with Claude Code (recommended path)

You don't need to type any of this yourself — open Claude Code and paste these as instructions, one at a time, and it will do the work.

1. **Open Claude Code** (desktop app, "Code" tab), and open this project folder.
2. Tell Claude Code: *"Install the dependencies for this project and run it locally so I can see it in the browser."*
   This runs `npm install` and `npm run dev` behind the scenes.
3. **Create a Firebase project** at [firebase.google.com/console](https://firebase.google.com/console) — click "Add project," name it "The Inner Room," free Spark plan is enough.
4. In the Firebase console, go to **Build > Authentication > Get started**, enable "Email/Password" sign-in.
5. Go to **Build > Firestore Database > Create database**, start in test mode (we'll tighten security rules before real launch).
6. In **Project settings > General > Your apps**, click the web icon (`</>`) to register a web app, and copy the config object it gives you.
7. Tell Claude Code: *"Update src/firebase.js with this config: [paste the config you copied]"*
8. Tell Claude Code: *"Push this project to a new GitHub repository called inner-room."* (You'll need to be signed into GitHub in the browser Claude Code opens, or provide a personal access token if asked.)
9. When ready to put it online, tell Claude Code: *"Set up Firebase Hosting for this project and deploy it."*

## Notes on cost

Everything here fits Firebase's free Spark tier for a small-to-medium user base:
- Firestore: 50K reads / 20K writes per day free
- Authentication: unlimited free for email/password
- Hosting: 10GB storage, 360MB/day transfer free

You'll only need to worry about billing if the app grows well beyond youth-group scale.
