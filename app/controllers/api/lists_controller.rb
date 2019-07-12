class Api::ListsController < ApplicationController
    before_action :require_logged_in

    def index
        # @board = Board.find(params[:board_id])
        # @lists = @board.lists
         @lists = List.all.where(board_id: params[:board_id])

        render :index

    end

     def create
        @list = List.new(list_params)
    
        if @list.save
            render :show    
    else
            render json: @list.errors.full_messages, status: 422 
        end
    end

    def update 
        
        @list = List.find(params[:id])
      
            if @list.update(list_params)
                render :show 
            else
                render json: @list.errors.full_messages, status: 422 
     end
  end

  def destoy
    @list = List.find(params[:id])
    @list.destroy
    head :no_content
    end



     private
    def list_params
    params.require(:list).permit(:title, :board_id)

    end
end
