// class BoardsIndex extends React.Component {
//     constructor(props) {
//         super(props);
//         console.log(this.props);
//         this.state = { recentBoards: this.props.recentActiveBoards || [] };
//     }

//     componentDidMount() {
//         //localStorage.clear();
//         this.props
//             .fetchAllBoards()
//             .then(() => {
//                 let recents = ls.get("recentBoards") || [];
//                 console.log(recents);
//                 this.props.updateMostRecentBoards(recents);
//             })
//             .then(() =>
//                 this.setState({
//                     recentBoards: this.props.recentActiveBoards
//                 })
//             );
//         //   .then(() => this.props.updateMostRecentBoards(this.state.recentBoards));

//         // .then(() => this.props.fetchAllLists())
//         // .then(() => this.props.fetchAllCards());
//     }

//     // handleMostRecentBoards(boardId) {
//     //   console.log(this.state);
//     //   const currentBoards = this.state.recentBoards.slice(-4);
//     //   if (!currentBoards) {
//     //     return;
//     //   }

//     //   if (currentBoards.indexOf(boardId) === 0) {
//     //     let newBoards = currentBoards.slice(1);
//     //     let mostRecentBoards = [...newBoards, boardId];

//     //     this.setState({ recentBoards: mostRecentBoards });
//     //     ls.set("recentBoards", mostRecentBoards);
//     //   }
//     // }

//     // fetch(URL)
//     //   .then(response => response.json())
//     //   .then(json => this.setState({
//     //   articles: json.results,
//     //   readNow: ls.get('readNow') || [],
//     //   readLater: ls.get('readLater') || [],
//     //   likedSections: ls.get('likedSections') || []
//     // }));

//     renderBoards() {
//         const boards = Object.values(this.props.boards);

//         return boards.map(board => {
//             return (
//                 <BoardIndexItem
//                     board={board}
//                     key={board.id}
//                     recentBoards={this.state.recentBoards}
//                     updateMostRecentBoards={this.props.updateMostRecentBoards}
//                 />
//             );
//         });
//     }

//     renderMostActiveBoards() {
//         const recents = this.state.recentBoards;
//         const allBoards = this.props.boards;
//         if (Object.values(allBoards).length === 0) {
//             return;
//         }
//         return recents.map((id, idx) => {
//             let board = allBoards[id];
//             return <BoardIndexItem board={board} key={idx} />;
//         });
//     }

//     // const BenchIndex = ({ benches }) => (
//     //   <div>
//     //     <h1>Benches: </h1>
//     //     {benches.map(bench => (
//     //       <BenchIndexItem
//     //         bench={bench}
//     //         key={bench.id}
//     //       />
//     //     ))}
//     //   </div>
//     // );

//     render() {
//         console.log(this.state);
//         console.log(this.props);
//         console.log(ls.get("recentBoards"));
//         return (
//             <HomeWrapper>
//                 <h3>Recent Boards</h3>
//                 <AllBoards>{this.renderMostActiveBoards()}</AllBoards>

//                 <h3>All Boards</h3>
//                 <AllBoards>
//                     {this.renderBoards()}
//                     {this.props.createNewBoard}
//                 </AllBoards>
//             </HomeWrapper>
//         );
//     }
// }

// export default BoardsIndex;

// handleClick() {
//     const boardId = this.props.board.id;

//     if (this.props.recentBoards !== undefined) {
//         const currentBoards = this.props.recentBoards.slice(-4);
//         console.log(currentBoards);
//         //this.props.history.push(`/boards/${boardId}`);
//         if (currentBoards.indexOf(boardId) === -1) {
//             if (currentBoards.length > 3) {
//                 let currents = currentBoards.slice();
//                 currents.shift();
//                 let mostRecentBoards = [...currents, boardId];

//                 ls.set("recentBoards", mostRecentBoards);
//                 this.props.updateMostRecentBoards(mostRecentBoards);
//             } else {
//                 let mostRecentBoards2 = [...currentBoards, boardId];

//                 ls.set("recentBoards", mostRecentBoards2);
//                 this.props.updateMostRecentBoards(mostRecentBoards2);
//             }
//         }
//     }
//     this.props.history.push(`/boards/${boardId}`);
// }
