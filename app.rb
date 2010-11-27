require "rubygems"
require "sinatra"

get "/" do
  "<h1>Welcome to <i>Rankida</i>.com</h1><br />Light the fuse..."
end

get "/hello/:name" do |n|
  "<h1>Hello " + n + "</h1><br />Light the fuse..."
end
