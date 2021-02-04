class Question{
      constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("ENTER CORRECT OPTION");
      this.button = createButton('Submit');
      this.title = createElement('h1');
      
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    
    }
    hide(){
      this.button.hide();
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
    }
  
    display(){
     this.title.html("MY QUIZ GAME");
     this.title.position(300,0);

     this.question.html("Question: WHAT STARTS AND ENDS WITH THE LETTER 'E', BUT HAS ONLY ONE LETTER?");
     this.question.position(30,80);

     this.option1.html("1. EVERYONE");
     this.option1.position(30,100);

     this.option2.html("2. ENVELOPE");
     this.option2.position(30,120);

     this.option3.html("3. ESTIMATE");
     this.option3.position(30,140);

     this.option4.html("4. EXAMPLE");
     this.option4.position(30,160);

     
     this.input1.position(50,240);
     this.input2.position(250,240);
     this.button.position(200,280);
     
     this.button.mousePressed(()=>{
     this.title.hide();
     this.input1.hide();
     this.input2.hide();
     this.button.hide();

     contestant.name = this.input1.value();
     contestant.answer = this.input2.value();
     contestantCount+=1;
     contestant.index = contestantCount;
     contestant.update();
     contestant.updateCount(contestantCount);
});
    
    }
}