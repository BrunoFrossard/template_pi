// Use DBML to define your database structure
// Docs: https://dbml.dbdiagram.io/docs

Table participants {
  participant_id integer [primary key]
  name varchar
  email varchar [unique]
  created_at timestamp
}

Table events {
  event_id integer [primary key]
  event_title varchar
  event_description text
  creator_id integer [not null]
  event_status varchar
  event_date date
  created_at timestamp
}

Table subscriptions {
  subscriber_id integer
  event_id integer
  subscription_date timestamp
}

Ref: events.creator_id > participants.participant_id // many-to-one
Ref: subscriptions.subscriber_id > participants.participant_id // many-to-one
Ref: subscriptions.event_id > events.event_id // many-to-one
