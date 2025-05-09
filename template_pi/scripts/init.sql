CREATE TABLE participants (
  participant_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
  event_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  creator_id INTEGER NOT NULL,
  status VARCHAR(20) NOT NULL,
  event_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creator_id) REFERENCES participants(participant_id) ON DELETE CASCADE
);

CREATE TABLE subscriptions (
  subscriber_id INTEGER NOT NULL,
  event_id INTEGER NOT NULL,
  subscription_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (subscriber_id, event_id),
  FOREIGN KEY (subscriber_id) REFERENCES participants(participant_id) ON DELETE CASCADE,
  FOREIGN KEY (event_id) REFERENCES events(event_id) ON DELETE CASCADE
);
