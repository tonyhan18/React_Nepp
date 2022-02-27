/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useEffect, useState } from "react";
import {
  AiOutlineClose,
  AiFillCaretDown,
  AiOutlineCamera,
  AiOutlineBarChart,
} from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import { BsHash } from "react-icons/bs";
import styled from "styled-components";
import { getBoardList } from "../../../apis/board";
import WritingModalContext from "../../../contexts/WritingModalContext";
import ConfirmModal from "./ConfirmModal";
import { postArticleCreate } from "../../../apis/article";
import { ModalOutside } from "../../atoms/modal";

function Writing({ onClose }) {
  const [boardList, setBoardList] = useState([
    {
      _id: "61ecf1c4f297fa9dacc0dfbd",
      title: "오늘의 인기글",
      slug: "오늘의 인기글",
      createdAt: "2022-01-23T06:12:20.288Z",
      __v: 0,
    },
    {
      _id: "621b1907acade95a6481a603",
      title: "익명1",
      slug: "익명1",
      createdAt: "2022-02-27T06:24:07.802Z",
      __v: 0,
    },
    {
      _id: "621b1910acade95a6481a605",
      title: "익명2",
      slug: "익명2",
      createdAt: "2022-02-27T06:24:16.031Z",
      __v: 0,
    },
    {
      _id: "621b1934acade95a6481a607",
      title: "연애상담소",
      slug: "연애상담소",
      createdAt: "2022-02-27T06:24:52.378Z",
      __v: 0,
    },
    {
      _id: "621b1945acade95a6481a609",
      title: "정치/이슈",
      slug: "정치/이슈",
      createdAt: "2022-02-27T06:25:09.327Z",
      __v: 0,
    },
    {
      _id: "621b1953acade95a6481a60b",
      title: "주식/투자",
      slug: "주식/투자",
      createdAt: "2022-02-27T06:25:23.741Z",
      __v: 0,
    },
    {
      _id: "621b1963acade95a6481a60d",
      title: "자유게시판",
      slug: "자유게시판",
      createdAt: "2022-02-27T06:25:39.113Z",
      __v: 0,
    },
    {
      _id: "621b196aacade95a6481a60f",
      title: "문의",
      slug: "문의",
      createdAt: "2022-02-27T06:25:46.673Z",
      __v: 0,
    },
    {
      _id: "621b1986acade95a6481a611",
      title: "이직/커리어",
      slug: "이직/커리어",
      createdAt: "2022-02-27T06:26:14.495Z",
      __v: 0,
    },
  ]);
  const [currentSelectBoard, setCurrentSelectBoard] = useState(0);
  const [isBoardSelected, setIsBoardSelected] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [inputImage, setInputImage] = useState("");

  {
    /*서비스 안정화 되면 사용하기 */
  }
  // useEffect(() => {
  //   (async () => {
  //     const data = await getBoardList();
  //     setBoardList(data);
  //     console.log(data);
  //   })();
  // }, []);
  const handleClickBoard = (_id) => {
    setCurrentSelectBoard(_id);
    setIsBoardSelected(false);
  };

  const confirmUploadModal = () => {
    setShowConfirmModal(true);
  };
  const closeConfirmModal = () => {
    setShowConfirmModal(false);
  };
  const uploadArticle = async () => {
    const params = {
      title: inputTitle,
      content: inputContent,
      board: boardList[currentSelectBoard]._id,
      //image: inputImage
    };
    //const data = await postArticleCreate(params);
    setInputContent("");
    setInputTitle("");
    closeConfirmModal();
    onClose();
  };

  return (
    <ModalOutside>
      <WritingModal>
        <div className="head">
          <a className="close-btn" onClick={onClose}>
            <AiOutlineClose />
          </a>
          <h5>글쓰기</h5>
          <a onClick={() => confirmUploadModal()}>등록</a>
        </div>
        {boardList.length >= 0 && (
          <div className="dropdown">
            <a
              className="current-select"
              onClick={() => {
                setIsBoardSelected(!isBoardSelected);
              }}
            >
              <span>{boardList[currentSelectBoard].title}</span>
              <AiFillCaretDown
                className={!isBoardSelected ? "rotated down-icon" : "down-icon"}
              />
            </a>
            {/* 드롭다운 영역 */}
            {isBoardSelected && (
              <div className="board-container">
                {boardList.map((b, index) => (
                  <div
                    key={b._id}
                    className="board-item"
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
              <input
                type="text"
                placeholder="제목을 입력해주세요."
                value={inputTitle}
                onChange={(e) => {
                  setInputTitle(e.target.value);
                }}
              />
              <textarea
                placeholder="토픽에 맞지 않는 글로 판단되어 다른 유저로부터 일정 수 이상의 신고를 받는 경우 글이 자동으로 숨김처리 될 수 있습니다."
                value={inputContent}
                onChange={(e) => {
                  setInputContent(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="foot">
              <AiOutlineCamera size="40" className="icon" />
              <AiOutlineBarChart size="40" className="icon" />
              <FiAtSign size="40" className="icon" />
              <BsHash size="40" className="icon" />
              {/* <input type="file" ref="img" class="hide" /> */}
            </div>
          </div>
        )}
      </WritingModal>
      {showConfirmModal && (
        <ConfirmModal
          title={`${boardList[currentSelectBoard].title} 에 글을 등록하시겠습니까?`}
          closeConfirmModal={() => {
            closeConfirmModal();
          }}
          uploadArticle={() => {
            uploadArticle();
          }}
        />
      )}
    </ModalOutside>
  );
}

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
