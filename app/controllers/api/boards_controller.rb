class Api::BoardsController < ApplicationController
    before_action :require_logged_in

    def create
        @board = Board.new(board_params)
        @board.owner_id = current_user.id
        if @board.save!
            render :show    
    else
            render json: @board.errors.full_messages, status: 422 
        end
    end

    def index
        @boards = current_user.boards
        render :index
    end

    def update 
        @board = Board.find(params[:id])
            if @board.update(board_params)
                render :show 
            else
                render json: @board.errors.full_messages, status: 422 
     end
  end

    def show
        @board = Board.find(params[:id])
        render :show
    end

    def destroy
    @board = Board.find(params[:id])
    @board.destroy
    head :no_content
    end


    private
    def board_params
    params.require(:board).permit(:title, {:list_positions => []}, :id)

    end
end
