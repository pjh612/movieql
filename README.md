# movieql

Movie API with Graphql

type Movie {
id: Int!
title: String!
rating: Float!
summary: String!
language: String!
medium_cover_image: String
description_intro: String
genres: [String]
}

Query{
movies(limit: Int, rating: Float): [Movie]!
movie(id: Int!): Movie
suggestions(id: Int!): Movie!
}

- limit (불러올 영화 개수)
- rating (최소 평점)
- id(영화 고유 식별키)

movies - limit, rating에 따라 영화 정보를 받아온다.
movie - id에 따른 영화정보를 한개 받아온다.
sugesstions - id에 관련된 추천영화들을 받아온다.
