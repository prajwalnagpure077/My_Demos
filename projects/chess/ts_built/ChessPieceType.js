var ChessPieceType;
(function (ChessPieceType) {
    ChessPieceType[ChessPieceType["king"] = 0] = "king";
    ChessPieceType[ChessPieceType["rook"] = 1] = "rook";
    ChessPieceType[ChessPieceType["bishop"] = 2] = "bishop";
    ChessPieceType[ChessPieceType["queen"] = 3] = "queen";
    ChessPieceType[ChessPieceType["knight"] = 4] = "knight";
    ChessPieceType[ChessPieceType["pawn"] = 5] = "pawn";
})(ChessPieceType || (ChessPieceType = {}));
