import { VoteComponent } from './vote.component';

describe('vote component', () => {
    // Arange
    let comp: VoteComponent;

    beforeEach(() => {
        comp =  new VoteComponent();
    });

    xit('should increment totalVote when upvoted', () => {
        // Act
        comp.upVote();

        // Assert
        expect(comp.totalVotes).toBe(1);
    });

    xit('should decrement totalVote when downvoted', () => {
        // Act
        comp.downVote();

        // Assert
        expect(comp.totalVotes).toBe(-1);
    });

});

