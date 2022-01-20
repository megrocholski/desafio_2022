import styled from "styled-components";

export const Container = styled.div`
  margin: 20px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);

  .header {
    display: flex;
    flex-direction: row;
	background-color: #eaeef4;
	border-radius: 10px;
	/* align-items: center; */
  }
  .img {
	  width: 150px;
	  height: 150px;
	  border-radius: 10px;
	  display: table;
  }
  .info {
	  display: flex;
	  flex-direction: column;
	  margin-left: 20px;
  }
  .title {
    font-size: 20px;
    color: black;
  }
  .subtitle {
    display: flex;
	flex-direction: row;
    font-size: 16px;
    color: grey;
    justify-content: space-between;
	margin-right: 10px;
	width: 70%;
  }

  .content {
    font-size: 14;
	margin-bottom: 20px;
  }

  .button {
	  text-decoration: none;
	  background-color: #e7eceb;
	  padding: 8px;
	  border-radius: 10px;
	  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
