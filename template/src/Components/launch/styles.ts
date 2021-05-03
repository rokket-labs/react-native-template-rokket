import styled from '@emotion/native'

export const Card = styled.View(({ theme }) => ({
  borderRadius: 5,
  marginVertical: 15,
  marginHorizontal: 15,
  minWidth: 320,
  minHeight: 240,
  borderWidth: 2,
  borderColor: theme.border,
}))

export const CoverImage = styled.Image({
  resizeMode: 'cover',
  width: '100%',
  height: 140,
})

export const InfoContainer = styled.View({
  flexDirection: 'column',
  paddingVertical: 10,
  paddingHorizontal: 10,
})

export const Title = styled.Text(({ theme }) => ({
  marginBottom: 5,
  fontSize: 18,
  fontWeight: 'bold',
  color: theme.text,
}))

export const InfoText = styled.Text(({ theme }) => ({
  color: theme.text,
}))

export const ExternalLink = styled.Text(({ theme }) => ({
  marginTop: 10,
  color: theme.primary,
}))
