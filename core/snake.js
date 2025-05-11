export default class Snake {
    constructor(config){
        this.config = config;
        this.body = []; 
        this.direction = {x:0, y:0};
        this.nextDirection = {x:0, y:0};
        this.reset()
    }

    // reset the snake to the initial position
    reset(){
        const initialPos = this.config.initialSnakePosition;
        this.body = [{x:initialPos.x, y: initialPos.y}]
        this.direction = {x:0, y:0};
        this.nextDirection = {x:0, y:0};
    }

    // get snake head
    get head(){
        return this.body[0];
    }

    setDirection(dx,dy){ 
        // prevent 180 degree turns
        if(
            (dx === -this.direction.x && dy === -this.direction.y) || 
            (dx === this.direction.x && dy === this.direction.y)
        )
        {
            return
        }
        // buffer direction change til next update
        this.nextDirection = {x:dx, y:dy};

    }

    update(tileCount){
        // applying buffered direction change
        this.direction = {...this.nextDirection}

        // only move if snake has a direction
        if(this.direction.x !== 0 && this.direction.y !==0){
            // calculate new head position
            const newHead = {
                x: this.head.x = this.direction.x,
                y: this.head.y = this.direction.y
            }
            
            // add new head  to the beginning of the body array
            this.body.unshift(newHead);
    

        }

}

