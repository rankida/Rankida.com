require 'rubygems'
require 'sinatra'
require "sinatra/content_for"
require 'json'

get "/" do
  erb :jsonEdit
end

get '/jsonEditor' do
  erb :jsonEdit
end

get '/jsonViewer' do
  erb :jsonViewer
end

get "/hello/:name" do |n|
  "<h1>Hello " + n + "</h1><br />Light the fuse..."
end

