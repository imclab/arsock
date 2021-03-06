set :user, "ec2-user"
set :application, "arsock"
set :repository, "git@github.com:uniba/arsock.git"
set :scm, :git
set :branch, "master"
set :scm_verbose, true
set :deploy_to, "/home/#{user}/app/#{application}"
set :deploy_via, :remote_cache
set :git_shallow_clone, 1
set :node_env, 'production'
set :node_port, 80

role :web, "54.247.166.129"
role :app, "54.247.166.129"

namespace :deploy do
  task :start do
    run "sudo NODE_ENV=#{node_env} PORT=#{node_port} forever start #{current_path}/app.js"
  end
  task :stop do
    run "sudo forever stop #{current_path}/app.js"
  end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "sudo forever restart #{current_path}/app.js"
  end
end

after "deploy:create_symlink", :roles => :app do
  run "ln -sfv #{shared_path}/auth.json #{current_path}/config"
  run "ln -svf #{shared_path}/node_modules #{current_path}/node_modules"
  run "cd #{current_path} && npm install"
end

after "deploy:setup", :roles => :app do
  run "mkdir -p #{shared_path}/node_modules"
end
