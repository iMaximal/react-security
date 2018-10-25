CREATE TABLE users(
  username character(64),
  password character(64),
  session_id character(36)
);

INSERT INTO users(username, password) VALUES
('foo123', 'pass123'),
('bar456', 'word456');
