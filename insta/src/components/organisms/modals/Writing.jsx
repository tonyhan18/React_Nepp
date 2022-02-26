import React, { useContext, useState } from "react";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiFillCamera,
  AiFillCheckCircle,
} from "react-icons/ai";
import styled from "styled-components";
import WritingModalContext from "../../../contexts/WritingModalContext";

function Writing({ onClose }) {
  const [boardList, setBoardList] = useState([]);
  const [currentSelectBoard, setCurrentSelectBoard] = useState(0);
  const [isBoardSelected, setIsBoardSelected] = useState(false);

  const handleClickBoard = ({ index }) => {
    setCurrentSelectBoard(index);
    setIsBoardSelected(false);
  };
  return (
    <ModalOutside>
      <WritingModal>
        <div className="head">
          <a className="close-btn" onClick={onClose}>
            <AiOutlineClose />
          </a>
          <h5>글쓰기</h5>
          <a>등록</a>
        </div>
        {boardList.length >= 0 && (
          <div className="dropdown">
            <a
              className="current-select"
              onClick={() => {
                setIsBoardSelected(!isBoardSelected);
              }}
            >
              {/* {boardList[currentSelectBoard].title} */}
              <span>보드보드</span>
              <AiFillCaretDown />
            </a>
            {/* 드롭다운 영역 */}
            {isBoardSelected && (
              <div class="board-container">
                {boardList.map((b, index) => (
                  <div
                    key={b._id}
                    class="board-item"
                    onClick={() => {
                      handleClickBoard(index);
                    }}
                  >
                    {b.title}
                  </div>
                ))}
              </div>
            )}
            <div className="input-container">
              <input type="text" placeholder="제목을 입력해주세요." />
              <textarea placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다."></textarea>
            </div>
            <div className="foot">
              <AiFillCamera className="icon" />
              {/* <input type="file" ref="img" class="hide" /> */}
            </div>
          </div>
        )}
      </WritingModal>
    </ModalOutside>
  );
}

const ModalOutside = styled.div`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  place-content: center;
  z-index: 1;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(34, 34, 34);
    font-size: 18px;
    font-weight: 700;
    padding: 23px 30px;
    border-bottom: solid 1px rgb(223, 225, 228);
    h5 {
      margin: 0;
    }
    .close-btn {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;

const WritingModal = styled.div`
  width: 750px;
  height: auto;
  background: white;
  height: 610px;
  .dropdown {
    width: inherit;
    user-select: none;
    .current-select {
      height: 68px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #d4d4d4;
      .down-icon {
        transition: 0.3s ease-in-out;
        &.rotated {
          transform: rotate(180deg);
        }
      }
    }
    .board-container {
      position: absolute;
      overflow-y: auto;
      width: inherit;
      border-bottom: 1px solid #d4d4d4;
      height: 100%;
      max-height: 252px;
    }
    .board-item {
      padding: 12px 20px 11px;
      font-size: 12px;
      border-bottom: 1px solid #f6f7fa;
      cursor: pointer;
      background: white;
      &:hover {
        color: #fff;
        background: #da3238;
      }
    }
  }
  .input-container {
    padding: 0 52px 55px;
  }
  input[type="text"] {
    padding: 26px 60px 24px 0;
    font-size: 20px;
    line-height: 1.25em;
    display: block;
    box-sizing: border-box;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
  }
  textarea {
    width: 100%;
    resize: none;
    display: block;
    border: none;
    margin-top: 30px;
    font-size: 16px;
    min-height: 240px;
    overflow: hidden;
    letter-spacing: -0.1px;
    line-height: 1.5em;
  }
  .foot {
    height: 67px;
    padding: 0 24px;
    background: #f6f7fa;
    border: 0;
    display: flex;
    align-items: center;
    & > .icon {
      padding: 0 10px;
    }
  }
`;
export default Writing;
