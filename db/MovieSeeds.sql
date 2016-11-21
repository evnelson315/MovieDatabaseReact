CREATE DATABASE MovieDB;

USE MovieDB;

CREATE TABLE movies(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  year VARCHAR(45) NULL,
  actors VARCHAR(60) NULL,
  rating VARCHAR(45) NULL,
  genre VARCHAR(45) NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Hook','1991','Dustin Hoffman, Robin Williams, Julia Roberts, Bob Hoskins', 'PG', 'Adventure, Comedy, Family');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('TRON','1982','Jeff Bridges, Bruce Boxleitner, David Warner, Cindy Morgan', 'PG', 'Action, Adventure, Sci-Fi');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Alien','1979','Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton', 'R', 'Horror, Sci-Fi');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Toy Story','1995','Tom Hanks, Tim Allen, Don Rickles, Jim Varney"', 'G', 'Animation, Adventure, Comedy');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Fight Club','1999','Edward Norton, Brad Pitt, Meat Loaf, Zach Grenier', 'R', 'Drama');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('12 Angry Men','1957','Martin Balsam, John Fiedler, Lee J. Cobb, E.G. Marshall', 'PG', 'Drama');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Blade Runner','1982','Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos', 'R', 'Sci-Fi, Thriller');
INSERT INTO movies (title, year, actors, rating ,genre) VALUES ('Frozen', '2013', 'Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad', 'G', 'Animation, Adventure, Comedy"');
