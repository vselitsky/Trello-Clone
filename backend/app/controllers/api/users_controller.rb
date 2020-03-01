class Api::UsersController < ApplicationController

  
    
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render  'api/users/show'
    
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
        @user = User.find(params[:id])
            if @user.update(user_params)
                render :show 
            else
                render json: @user.errors.full_messages, status: 422 
     end
  end

  def update_recent_boards  
   @user = User.find(params[:id])
    
    if params[:user].key?(:recent_boards)

        @user.recent_boards = params[:user][:recent_boards]
        @user.save
    else 
        @user.recent_boards = []
        @user.save
    end
    render :show
  end


  def user_params
    params.require(:user).permit(:username, :email, :password, :id, {:recent_boards => []})
  end


end
