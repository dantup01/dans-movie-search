class MoviesController < ApplicationController
  before_action :set_movie, only: [:show]

  def index
    @movies = Movie.all
  end

  def show
  end

  def new
    @movie = Movie.new
  end

  def create
    @movie = Movie.new(movie_params)
    if @movie.save
      redirect to root
    else
      render :new
    end
  end


  private

  def movie_params
    params.require(:movie).permit(:title, :year, :imdbID, :type)
  end

  def set_movie
    @movie = movie.find(params[:id])
  end
end
