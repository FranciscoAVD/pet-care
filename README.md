# PetCare

## Purpose
PetCare is a platform for small or medium-sized pet-housing businesses to manage the guests they are currently looking out for.

## What it does

The app allows users to store information about the pets such as:
- Pet name
- Owner of the pet
- Age of the pet
- A picture of the pet
- Any additional details concerning the pet

## How it works

The app is built in NextJS as a framework, Convex as a database solution, and Clerk for authentication. After a user signs up/in, any pet added to the user's dashboard
is saved to the database and indexed with the corresponding user ID to allow for faster lookup speeds.